import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { Color, MathUtils } from "three";

// Ashima simplex noise (3D) — used to displace the surface in the vertex shader.
const SNOISE = /* glsl */ `
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+1.0*C.xxx; vec3 x2=x0-i2+2.0*C.xxx; vec3 x3=x0-1.0+3.0*C.xxx;
  i=mod(i,289.0);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=1.0/7.0; vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;

const VERT = /* glsl */ `
uniform float uTime;
varying float vElev;
varying vec3 vNormal;
varying vec3 vView;
${SNOISE}
void main(){
  float n = snoise(position * 1.1 + uTime * 0.22);
  float n2 = snoise(position * 2.6 - uTime * 0.13) * 0.5;
  float elev = n + n2;
  vElev = elev;
  vec3 displaced = position + normal * elev * 0.16;
  vec4 mv = modelViewMatrix * vec4(displaced, 1.0);
  vView = -mv.xyz;
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * mv;
}`;

const FRAG = /* glsl */ `
uniform vec3 uA;
uniform vec3 uB;
uniform vec3 uRim;
varying float vElev;
varying vec3 vNormal;
varying vec3 vView;
void main(){
  float t = clamp(vElev * 0.5 + 0.5, 0.0, 1.0);
  vec3 col = mix(uA, uB, t);
  float fres = pow(1.0 - max(dot(normalize(vNormal), normalize(vView)), 0.0), 2.5);
  col += uRim * fres * 1.3;
  gl_FragColor = vec4(col, 1.0);
}`;

function ShaderBlob() {
  const mat = useRef();
  const mesh = useRef();
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uA: { value: new Color("#5227FF") },
      uB: { value: new Color("#7cff67") },
      uRim: { value: new Color("#A78BFA") },
    }),
    []
  );

  useFrame((state, d) => {
    uniforms.uTime.value += d;
    if (mesh.current) {
      mesh.current.rotation.y += d * 0.15;
      mesh.current.rotation.x = MathUtils.lerp(mesh.current.rotation.x, -state.pointer.y * 0.4, 0.04);
      mesh.current.rotation.z = MathUtils.lerp(mesh.current.rotation.z, state.pointer.x * 0.3, 0.04);
    }
  });

  return (
    <mesh ref={mesh} position={[1.8, 0.3, 0]} scale={1.4}>
      <icosahedronGeometry args={[1, 128]} />
      <shaderMaterial ref={mat} vertexShader={VERT} fragmentShader={FRAG} uniforms={uniforms} />
    </mesh>
  );
}

function Rig() {
  useFrame((state) => {
    state.camera.position.x = MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.5, 0.03);
    state.camera.position.y = MathUtils.lerp(state.camera.position.y, state.pointer.y * 0.5, 0.03);
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export const Scene3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }} camera={{ position: [0, 0, 6], fov: 55 }}>
        <Stars radius={70} depth={50} count={1400} factor={4} saturation={0} fade speed={0.3} />
        <ShaderBlob />
        <Rig />
      </Canvas>
    </div>
  );
};

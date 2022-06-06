import { useEffect, useState } from 'react'
import './engagement.css'
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { Scene } from 'three';
function Engagement() {
    useEffect(()=>{
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        const renderer = new THREE.WebGL1Renderer({
            canvas: document.querySelector('#bg'),
        });

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.position.setZ(30);


        const geometry = new THREE.TorusGeometry(5, 2 ,8, 50);
        const material = new THREE.MeshStandardMaterial({color : 0xFF6347});
        const torus = new THREE.Mesh(geometry, material);

        scene.add(torus);

        const pointLight = new THREE.PointLight(0xffffff);
        pointLight.position.set(20,20,20);

        const ambientLight = new THREE.AmbientLight(0xffffff);


        scene.add(pointLight, ambientLight);

        const controls = new OrbitControls(camera, renderer.domElement);

        function addStar() {
            const geometry = new THREE.SphereGeometry(0.25, 24, 24);
            const material = new THREE.MeshStandardMaterial({color : 0xffffff})
            const star = new THREE.Mesh(geometry, material);

            const [x,y,z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));

            star.position.set(x, y ,z);
            scene.add(star);
            
        }

        Array(200).fill().forEach(addStar);


        const spaceTexture = new THREE.TextureLoader().load('./src/img/space.jpg');
        scene.background = spaceTexture;

        const reunionTexture = new THREE.TextureLoader().load("./src/img/reunion.jpg"); 

        const reunion = new THREE.Mesh(
            new THREE.BoxGeometry(3,3,3),
            new THREE.MeshBasicMaterial({ map : reunionTexture})
        );

        scene.add(reunion);

        const earthTexture = new THREE.TextureLoader().load("./src/img/earth.jpg"); 

        const earth = new THREE.Mesh(
            new THREE.SphereGeometry(3, 32, 32),
            new THREE.MeshStandardMaterial({
                map : earthTexture,
            })
        )

        earth.position. z= 30;
        earth.position.setX(-10);

        scene.add(earth);

        function moveCamera(){
            const t = document.body.getBoundingClientRect().top;
            earth.rotation.x += 0.05;
            earth.rotation.y += 0.075;
            earth.rotation.z += 0.05;

            reunion.rotation.y += 0.01;
            reunion.rotation.z += 0.01;

            camera.position.z = t * -0.01;
            camera.position.x = t * -0.0002;
            camera.position.y = t * -0.0002;

        }

        document.body.onscroll = moveCamera;

        function animate() {
            requestAnimationFrame(animate);

            torus.rotation.x += 0.01;
            torus.rotation.y += 0.005;
            torus.rotation.z += 0.01;

            controls.update();


            renderer.render(scene, camera);
        }

        animate();

    })

    return(
        
            <div className='troisd'>
                <canvas id="bg"></canvas>
                <div className="content">
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>
                    <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem praesentium similique vero quibusdam, eos minima nemo corrupti eum commodi doloremque eaque facere quam expedita! Eveniet vero amet delectus ut quos.</blockquote>

                </div>
                

            </div>



    )
}

export default Engagement

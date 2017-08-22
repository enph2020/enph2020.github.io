"use strict";

const ANIMATION_LOOP = true;
const DEBUG = false;

var g_stats;
var g_scene, g_renderer, g_camera, g_controls;
var g_courseSurface;

// Runs when everything is loaded
$(function() {
    // Detect WebGL
    if (Detector.webgl) {
        setup();

        if (ANIMATION_LOOP) draw();
        else render();

    } else {
        var warning = Detector.getWebGLErrorMessage();
        document.body.appendChild(warning);
    }
});

function init(w, h) {
    g_scene = new THREE.Scene();

    g_camera = new THREE.PerspectiveCamera(90, w / h, 0.01, 1000000);
    g_renderer = new THREE.WebGLRenderer();
    g_renderer.setClearColor(new THREE.Color(0xEEEEEE));
    g_renderer.setPixelRatio(w / h);
    g_renderer.setSize(w, h);

    g_renderer.shadowMap.enabled = true;
    g_renderer.shadowMap.type = THREE.PCFShadowMap;

    g_controls = new THREE.OrbitControls(g_camera, g_renderer.domElement);
    if (ANIMATION_LOOP) {
        g_controls.enableDamping = true;
        g_controls.dampingFactor = 0.2;
        g_controls.rotateSpeed = 0.3;
    } else {
        g_controls.addEventListener('change', render); // remove when using animation loop
    }

    var container = document.getElementById('GLOutput');
    container.appendChild(g_renderer.domElement);

    if (DEBUG) {
        g_stats = new Stats();
        container.appendChild(g_stats.dom);
    }

    // window.addEventListener('resize', onWindowResize, false);
}

var frameCount = 0;

function setup() {
    // init(window.innerWidth, window.innerHeight);
    // var container = document.getElementById('GLOutput');
    // console.log(container);
    init($('GLOutput').width(), $('GLOutput').height()); 
    // init(800, 480);

    g_camera.position.set(0, 0, 200);
    g_camera.lookAt(g_scene.position);

    // lights
    // var directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1.0);
    // directionalLight.position.set(1, 1, 1);
    // directionalLight.castShadow = true;
    // g_scene.add(directionalLight)
    // g_scene.add(new THREE.AmbientLight(0xFFFFFF, 1.0));
    g_scene.add( new THREE.HemisphereLight( 0x443333, 0x111122 ) );
    addShadowedLight( 100, 100, 100, 0xffffff, 1.35 );
    addShadowedLight( 50, 100, -100, 0xffaa00, 1 );

    // Ground plane
    var plane = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(500, 500),
        new THREE.MeshPhongMaterial({ color: 0x999999, specular: 0x101010 })
    );
    plane.rotation.x = -Math.PI/2;
    plane.position.y = -0.5;
    plane.receiveShadow = true;
    g_scene.add(plane);


    // =========================== COLLADA
    // Create loader object
    // var loadingManager = new THREE.LoadingManager(function() {
    //     g_scene.add(g_courseSurface);
    // })
    // var loader = new THREE.ColladaLoader(loadingManager);
    // // loader.options.convertUpAxis = true;
    // loader.load('surface.dae', function(collada) {
    //     g_courseSurface = collada.scene;
    // });

    // =========================== STL
    // Loader object
    var loader = new THREE.STLLoader();
    loader.load('surface.stl', function(geom) {
        // var material = new THREE.MeshStandardMaterial({
        //     color: 0x4499FF,
        //     // specular: 0x222222,
        //     // shininess: 200,
        //     roughness: 0.5,
        //     metalness: 0.2
        // });
        var material = new THREE.MeshLambertMaterial({ color:0x448866 });
        var mesh = new THREE.Mesh(geom, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        mesh.rotation.set(-Math.PI / 2, 0, 0);
        mesh.scale.set(0.1, 0.1, 0.1);
        mesh.position.set(-100, 0, 100);

        g_scene.add(mesh);
    });


    // random sphere object
    // var testSphere = new THREE.Mesh(
    //     new THREE.SphereGeometry(100, 32, 32),
    //     new THREE.MeshStandardMaterial()
    // );
    // g_scene.add(testSphere);
}

function draw() {
    if (DEBUG) g_stats.update();
    g_controls.update(); // required if controls.enableDamping = true, or if controls.autoRotate = true

    requestAnimationFrame(draw); //  request next frame
    render();
    frameCount++;
}

function render() {
    g_renderer.render(g_scene, g_camera);
}

function onWindowResize() {
    g_camera.aspect = window.innerWidth / window.innerHeight;
    g_camera.updateProjectionMatrix();
    g_renderer.setSize(window.innerWidth, window.innerHeight);
}

function addShadowedLight( x, y, z, color, intensity ) {
    var directionalLight = new THREE.DirectionalLight( color, intensity );
    directionalLight.position.set( x, y, z );
    g_scene.add( directionalLight );
    directionalLight.castShadow = true;
    var d = 1;
    directionalLight.shadow.camera.left = -d;
    directionalLight.shadow.camera.right = d;
    directionalLight.shadow.camera.top = d;
    directionalLight.shadow.camera.bottom = -d;
    directionalLight.shadow.camera.near = 1;
    directionalLight.shadow.camera.far = 4000;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.bias = -0.005;

    var helper = new THREE.DirectionalLightHelper( directionalLight, 5 ); 
    g_scene.add( helper );
}
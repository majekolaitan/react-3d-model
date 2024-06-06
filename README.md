# Import 3D model into React.js

1. **Install React Three Fiber**:

   - Use `npm install @react-three/fiber @react-three/drei` command to install React Three Fiber and its utilities.

2. **Download 3D Model**:

   - Visit Sketchfab or any other 3D model repository.
   - Download a model in GLTF format.

3. **Prepare 3D Model**:

   - Extract the downloaded ZIP file.
   - Rename the files (e.g., scene.gltf to earth.gltf, scene.bin to earth.bin).
   - Edit the GLTF file to match the names of the renamed files (near the string "Buffers" change the uri to match the new name).

4. **Convert GLTF to JSX**:

   - Navigate to the project's public folder.
   - Use `npx gltfjsx earth.gltf` command to convert the GLTF file to JSX.
   - Edit the generated earth.jsx file by adding `export default` to the Model function

5. **Set up the React App**:

   - Open the project in VS Code.
   - Import necessary components (`Canvas`, `Suspense`, `OrbitControls`, and the 3D model JSX file).
   - Create a basic React component structure.

6. **Display the 3D Model**:
   - Use the `Canvas` component to render the 3D scene.
   - Wrap the 3D model component with `Suspense` to handle loading.
   - Add an `ambientLight` component to fix the black color issue.
   - Add `OrbitControls` component for interaction.

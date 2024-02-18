import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FileUploadCloudinary from './pages/FileUploadCloudinary/FileUploadCloudinary';
import { Home } from './pages/Home/Home';
import { Shell } from './components/Shell/Shell';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shell />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'file-upload-cloudinary',
        element: <FileUploadCloudinary />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}

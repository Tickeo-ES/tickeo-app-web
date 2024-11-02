import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

interface Step {
  title: string;
  ref: string;
}

interface User {
  name: string;
}

const user: User = {
  name: "ingrid",
};

const titleStep: Step[] = [
  { title: "login", ref: "/auth/login" },
  { title: "registro de negocio", ref: "/businessRegister/register" },
  { title: "create ticket", ref: "/ticket/createTicket" },
];

interface PageDocumentationDialogProps {
  title: string;
  description?: string;
  steps: Step[];
  triggerText?: string;
}

export default function DialogWelcomePage() {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          home page de tickeo press me for continue
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-emerald-500 p-4 rounded-lg shadow-lg max-w-lg w-full max-h-screen overflow-y-auto">
          <AlertDialogHeader className="border-b pb-2 mb-4">
            <AlertDialogTitle className="text-3xl ">
              bienvenid@ {user.name}
            </AlertDialogTitle>

            <AlertDialogTitle>
              Pasos para la colaboración con el equipo de frontend
            </AlertDialogTitle>
            <AlertDialogDescription className="text-lg text-gray-800">
              Quiero asegurarme de que estemos alineados en el flujo de trabajo
              para que podamos colaborar de manera eficiente en este proyecto.
              Aquí te explico los pasos principales que seguiremos:
            </AlertDialogDescription>

            <AlertDialogTitle>Creación de Ramas de Trabajo:</AlertDialogTitle>
            <AlertDialogDescription className="text-lg text-gray-800">
              Cada vez que necesitemos hacer cambios o agregar una nueva
              funcionalidad, crearemos una <strong>rama específica</strong>{" "}
              desde <code>main</code> con un nombre descriptivo. Por ejemplo,{" "}
              <code>feature/nombre-de-la-funcionalidad</code> o{" "}
              <code>bugfix/nombre-del-error</code>. Esto nos permitirá hacer
              pruebas sin afectar la rama principal.
            </AlertDialogDescription>

            <AlertDialogTitle>Trabajo y Pruebas Locales:</AlertDialogTitle>
            <AlertDialogDescription className="text-lg text-gray-800">
              Realiza los cambios en tu rama y prueba el código en tu entorno
              local para asegurarte de que todo funcione bien antes de enviarlo
              al repositorio remoto. Si necesitas revisar algún ajuste de
              backend, podemos coordinar para que pruebes tus cambios en
              conjunto con los míos.
            </AlertDialogDescription>

            <AlertDialogTitle>Push y Pull Request:</AlertDialogTitle>
            <AlertDialogDescription className="text-lg text-gray-800">
              Una vez que hayas terminado los cambios y las pruebas, haz{" "}
              <code>push</code> de la rama al repositorio remoto. Crea un{" "}
              <strong>Pull Request (PR)</strong> desde tu rama hacia{" "}
              <code>main</code>. En el PR, puedes agregar una descripción de los
              cambios realizados y cualquier nota adicional que consideres útil.
              Revisaremos el PR juntos, y si todo está en orden, lo fusionaremos
              a <code>main</code>.
            </AlertDialogDescription>

            <AlertDialogTitle>Revisión y Pruebas Conjuntas:</AlertDialogTitle>
            <AlertDialogDescription className="text-lg text-gray-800">
              Antes de aprobar el PR, revisaremos los cambios y haremos pruebas
              adicionales si es necesario. Esto garantiza que todo esté bien
              integrado.
            </AlertDialogDescription>

            <AlertDialogTitle>Sincronización de Cambios:</AlertDialogTitle>
            <AlertDialogDescription className="text-lg text-gray-800">
              Después de fusionar el PR, actualizaremos nuestras ramas locales
              para tener la última versión de <code>main</code>. Este paso es
              importante para evitar conflictos y mantener todo actualizado.
            </AlertDialogDescription>

            <AlertDialogTitle>Herramientas y Comunicación</AlertDialogTitle>
            <AlertDialogDescription className="text-lg text-gray-800">
              Si tienes alguna duda en algún momento, no dudes en escribirme.
              También podemos coordinar una reunión rápida para revisar
              cualquier detalle en conjunto.
              <br />
              Cualquier feedback o sugerencia sobre este flujo es más que
              bienvenida. ¡Gracias por tu colaboración!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {titleStep.map((step) => (
              <AlertDialogAction key={step.title}>
                <Link href={step.ref}>{step.title}</Link>
              </AlertDialogAction>
            ))}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

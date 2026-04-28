import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

/* Root */
export function AlertDialog(props) {
  return <AlertDialogPrimitive.Root {...props} />;
}

/* Trigger */
export function AlertDialogTrigger(props) {
  return <AlertDialogPrimitive.Trigger {...props} />;
}

/* Content */
export function AlertDialogContent({ children, className = "", ...props }) {
  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay className="fixed inset-0 bg-black/40 z-50" />

      <AlertDialogPrimitive.Content
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-full max-w-md bg-white rounded-lg p-6 shadow-lg z-50 ${className}`}
        {...props}
      >
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  );
}

/* Header */
export function AlertDialogHeader({ children }) {
  return <div className="mb-4">{children}</div>;
}

/* Title */
export function AlertDialogTitle({ children }) {
  return <h2 className="text-lg font-semibold text-gray-800">{children}</h2>;
}

/* Description */
export function AlertDialogDescription({ children }) {
  return <p className="text-sm text-gray-500 mt-1">{children}</p>;
}

/* Footer */
export function AlertDialogFooter({ children }) {
  return <div className="flex justify-end gap-2 mt-6">{children}</div>;
}

/* Actions */
export function AlertDialogAction({ children, ...props }) {
  return (
    <AlertDialogPrimitive.Action
      className="px-4 py-2 bg-violet-600 text-white rounded-md text-sm"
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Action>
  );
}

export function AlertDialogCancel({ children, ...props }) {
  return (
    <AlertDialogPrimitive.Cancel
      className="px-4 py-2 border rounded-md text-sm"
      {...props}
    >
      {children}
    </AlertDialogPrimitive.Cancel>
  );
}
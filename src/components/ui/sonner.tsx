import { Toaster as Sonner, toast } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="dark"
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-dark-800 group-[.toaster]:text-white group-[.toaster]:border-white/10 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-gray-400",
          actionButton:
            "group-[.toast]:bg-cyber-cyan group-[.toast]:text-dark-950",
          cancelButton:
            "group-[.toast]:bg-dark-700 group-[.toast]:text-gray-400",
        },
      }}
      {...props}
    />
  )
}

export { Toaster, toast }

import Image from "next/image"

export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="w-10 h-10 relative animate-bounce">
                <Image 
                alt="logo"
                fill
                src="/logo3.png"
                />
            </div>

                <p className="text-sm to-muted-foreground">
                    Pixnot is thinking...   
                </p>

        </div>
    )
}
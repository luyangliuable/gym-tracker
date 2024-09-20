import React from "react";
import { Button } from "@/components/Button";
import {
  NavigationMenu,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/navigation-menu";
import { cn } from "@/lib/utils"


function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  const components: { title: string; href: string; description: string }[] = [
    {
      title: "Gym Tracking",
      href: "/docs/primitives/alert-dialog",
      description:
        "Track gym strength progress.",
    },
    {
      title: "Diet Tracking",
      href: "/docs/primitives/hover-card",
      description:
        "Track your diet.",
    },
    {
      title: "Sleep Tracking",
      href: "/docs/primitives/progress",
      description:
        "Track your sleep.",
    },
  ]

  return (
    <main className="p-2 w-screen h-screen relative z-10 flex flex-col">
      <NavigationMenu className="p-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tracking</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Gym Tracker
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">A gym tracking app avalaible on web and gui with amazing ui/ux.</p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/docs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                FAQ
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="h-full py-5 bg-[#F9F9F9] backdrop-blur-md rounded-xl flex justify-center items-center">
        <div className="w-full flex justify-center items-center flex flex-col gap-5">
          <h1 className="text-6xl p-2 border-[1px] bg-[#EEE] border-solid border-[#888] rounded-xl">🏋️</h1>
          <h1 className="text-4xl">Gym Tracker App</h1>
          <div className="flex flex-row gap-2">
            <Button asChild><a href="/login">Gym Tracking</a></Button>
            <Button asChild><a href="/login">Diet Tracking</a></Button>
            <Button asChild><a href="/login">Sleep Tracking</a></Button>
          </div>
        </div>
      </div>
    </main>
  )
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = "ListItem"

export default App

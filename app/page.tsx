import Image from "next/image";
import { DemoTeamMembers } from "./components/team-members";
import { DocsSidebarNav } from "./components/sidebar";
import { docsConfig } from "@/config/doc";
import { MainNav } from "./components/main-nav";
import { Children } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface HomeProps {
  children: React.ReactNode;
}

export default function Home({ children }: HomeProps) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 w-full border-b bg-background">
          <div className="px-8 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
            <MainNav items={docsConfig.mainNav}>
              <DocsSidebarNav items={docsConfig.sidebarNav} />
            </MainNav>
            <div className="flex flex-1 items-center space-x-4 sm:justify-end">
              <div className="flex-1 sm:grow-0">{/* <DocsSearch /> */}</div>
              <nav className="flex space-x-4">
                {/* <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.gitHub className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </Link> */}
              </nav>
            </div>
          </div>
        </header>
        <div className="px-8 flex-1">
          <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
            <aside className="fixed top-14 z-30 hidden h-[calc(100vh-4.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
              <DocsSidebarNav items={docsConfig.sidebarNav} />
            </aside>

            <div className="container h-[calc(100vh-4.5rem)] py-6 overflow-y-auto">
              <div className="grid h-[calc(100vh-4.5rem)] items-stretch gap-6 md:grid-cols-1">
                <div className="md:order-1">
                  <div className="flex flex-col space-y-4">
                    <div className="grid h-[calc(100vh-4.5rem)] gap-6 lg:grid-cols-2">
                      <div className="flex flex-col space-y-4">
                        <div className="flex flex-1 flex-col space-y-2">
                          <Label htmlFor="input">Input</Label>
                          <Textarea
                            id="input"
                            placeholder="We is going to the market."
                            className="flex-1 lg:min-h-[580px]"
                          />
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Label htmlFor="instructions">Instructions</Label>
                          <Textarea
                            id="instructions"
                            placeholder="Fix the grammar."
                          />
                        </div>
                      </div>
                      <div className="mt-[21px] min-h-[400px] rounded-md border bg-muted lg:min-h-[700px]" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button>Submit</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <SiteFooter className="border-t" /> */}
      </div>
    </>
  );
}

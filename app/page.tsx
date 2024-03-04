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
        <div className="flex-1">
          <div className="flex-1 md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr]">
            <aside className="fixed px-8 top-14 z-30 hidden h-[calc(100vh-4.5rem)] w-full shrink-0 overflow-y-auto border-r py-6 pr-2 md:sticky md:block lg:py-10">
              <DocsSidebarNav items={docsConfig.sidebarNav} />
            </aside>

            <div className="container h-[calc(100vh-4.5rem)] py-6 overflow-y-auto">
              <div className="grid items-stretch gap-6 md:grid-cols-1">
                {/* <div className="md:order-1"> */}
                <div className="flex flex-col space-y-4">
                  <div className="grid gap-6 lg:grid-cols-2">
                    <div className="flex flex-col space-y-4">
                      <div className="flex flex-1 flex-col space-y-2">
                        <Label htmlFor="input">Input</Label>
                        <Textarea
                          id="input"
                          placeholder="We is going to the market."
                          className="flex-1 lg:min-h-[400px]"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <Label htmlFor="instructions">Instructions</Label>
                        <Textarea
                          id="instructions"
                          rows={3}
                          placeholder="Fix the grammar."
                        />
                      </div>
                    </div>
                    <div className="lg:hidden flex items-center space-x-2">
                      <Button>Submit</Button> <Button>Submit</Button>
                    </div>

                    <div className="lg:mt-[21px] h-[calc(100vh-13rem-220px)] lg:h-[calc(100vh-12.5rem)] min-h-[400px] rounded-md border bg-muted lg:min-h-[400px] p-6 overflow-y-auto">
                      
                    <div className="grid gap-4">
          <div className="rounded-md bg-black p-6">
            <pre>
              <code className="grid gap-1 text-sm text-muted-foreground [&_span]:h-4">
                <span>
                  <span className="text-sky-300">import</span> os
                </span>
                <span>
                  <span className="text-sky-300">import</span> openai
                </span>
                <span />
                <span>
                  openai.api_key = os.getenv(
                  <span className="text-green-300">
                    &quot;OPENAI_API_KEY&quot;
                  </span>
                  )
                </span>
                <span />
                <span>response = openai.Completion.create(</span>
                <span>
                  {" "}
                  model=
                  <span className="text-green-300">&quot;davinci&quot;</span>,
                </span>
                <span>
                  {" "}
                  prompt=<span className="text-amber-300">&quot;&quot;</span>,
                </span>
                <span>
                  {" "}
                  temperature=<span className="text-amber-300">0.9</span>,
                </span>
                <span>
                  {" "}
                  max_tokens=<span className="text-amber-300">5</span>,
                </span>
                <span>
                  {" "}
                  top_p=<span className="text-amber-300">1</span>,
                </span>
                <span>
                  {" "}
                  frequency_penalty=<span className="text-amber-300">0</span>,
                </span>
                <span>
                  {" "}
                  presence_penalty=<span className="text-green-300">0</span>,
                </span>
                <span>)</span>
              </code>
            </pre>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Your API Key can be found here. You should use environment
              variables or a secret management tool to expose your key to your
              applications.
            </p>
          </div>
        </div>

                    </div>
                  </div>
                  <div className="hidden lg:block flex items-center space-x-2">
                    <Button>t</Button> <Button>Submit</Button>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <SiteFooter className="border-t" /> */}
      </div>
    </>
  );
}

import Image from "next/image";

export default function TrustedBy() {
  return (
    <section
      id="cleints"
      className="text-center mx-auto max-w-[80rem] px-6 md:px-8 py-16"
    >
      <div className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <h2 className="text-center text-sm font-semibold text-gray-600">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </h2>
          <div className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16 [&_path]:fill-red-900 ">
              <li>
                <Image
                  width={112}
                  height={32}
                  src="https://cdn.magicui.design/companies/Google.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert  "
                  alt="Google svg"
                />
              </li>
              <li>
                <Image
                  width={112}
                  height={32}
                  src="https://cdn.magicui.design/companies/Microsoft.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  alt="Microsoft svg"
                />
              </li>
              <li>
                <Image
                  width={112}
                  height={32}
                  src="https://cdn.magicui.design/companies/GitHub.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  alt="GitHub svg"
                />
              </li>
              <li>
                <Image
                  width={112}
                  height={32}
                  src="https://cdn.magicui.design/companies/Uber.svg"
                  className="h-8 w-28 px-2 dark:brightness-0 dark:invert"
                  alt="Uber svg"
                />
              </li>
              <li>
                <Image
                  src="https://cdn.magicui.design/companies/Notion.svg"
                  width={112}
                  height={32}
                  className="h-8 w-28 px-2 dark:filter dark:invert"
                  alt="Notion svg"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

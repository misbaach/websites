import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { useLanguageContext } from "@/contexts/LanguageContext";

import idFlag from "@/assets/id_flag.png";
import engFlag from "@/assets/eng_flag.png";

interface LangDropdownProps {
  display?: "hidden" | "block";
}

const languages: Record<string, string> = {
  id: idFlag,
  en: engFlag,
};

export default function LangDropdown({ display = "block" }: LangDropdownProps) {
  const { language, updateLanguage } = useLanguageContext();

  return (
    <>
      <div className={`${display} xl:block`}>
        <Listbox value={language} onChange={updateLanguage}>
          <div className="relative">
            <ListboxButton className="relative w-full cursor-default rounded-full bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-lg shadow-neutral-400 ring-1 ring-inset ring-gray-100 focus:outline-none sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <img
                  alt=""
                  src={languages[language] ?? ""}
                  className="flag-icon-margin flex-shrink-0"
                />
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-10 w-10 text-gray-900"
                />
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {Object.entries(languages).map(([id, flag]) => (
                <ListboxOption
                  key={id}
                  value={id}
                  className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-red-300 data-[focus]:bg-opacity-60 data-[focus]:text-white"
                >
                  <div className="flex items-center">
                    <img alt="" src={flag} className="flex-shrink-0" />
                    <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold"></span>
                  </div>

                  <span className="text-grey-900 absolute inset-y-0 right-0 flex items-center pr-4 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                    {id == language && (
                      <CheckIcon aria-hidden="true" className="h-6 w-6" />
                    )}
                  </span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>
    </>
  );
}

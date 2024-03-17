"use client";
import { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";

const people = [
  { id: 1, name: "1 comodo" },
  { id: 2, name: "2 comodos" },
  { id: 3, name: "3 comodos" },
  { id: 4, name: "4 comodos" },
  { id: 5, name: "5 comodos" },
  { id: 6, name: "6 comodos" },
  { id: 7, name: "7 comodos" },
  { id: 8, name: "8 comodos" },
  { id: 9, name: "9 comodos" },
  { id: 10, name: "10 comodos" },
  { id: 11, name: "11 comodos" },
  { id: 12, name: "12 comodos" },
  { id: 13, name: "13 comodos" },
  { id: 14, name: "14 comodos" },
  { id: 15, name: "15 comodos" },
  { id: 16, name: "16 comodos" },
  { id: 17, name: "17 comodos" },
  { id: 18, name: "18 comodos" },
  { id: 19, name: "19 comodos" },
  { id: 20, name: "20 comodos" },
  // More users...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Select({setComodos , comodos}) {
  const [query, setQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);



  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={comodos} onChange={setComodos}>
      <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">
        Quantos comodos?
      </Combobox.Label>
      <div className="relative mt-2">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person) => person?.name}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options

           className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.map((person) => (
              <Combobox.Option
                key={person.id}
                value={person}
     
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected && "font-semibold"
                      )}
                    >
                      {person.name}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-indigo-600"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}

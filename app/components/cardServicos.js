import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import * as moment from 'moment';   import 'moment/locale/pt-br';


const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CardServicos({servico}) {
  moment.locale('pt')
moment.updateLocale('pt')
  console.log(servico)
  const client = 
    {
      id: servico?.$id,
      name: servico?.servico,

      lastInvoice: { date: servico?.$createdAt, dateTime: servico?.$createdAt, amount: servico?.valor, status: servico?.status },
    }
  
  return (
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
{servico.map((client) => (
        <li key={client.$id} className="overflow-hidden rounded-xl border border-gray-200">
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
            <img
              src={client?.servico != 'Pintura externa'?'https://cloud.appwrite.io/v1/storage/buckets/public/files/65f687cb6da92412c76a/view?project=65f63eb7a14355c1ee4e&mode=admin' : 'https://cloud.appwrite.io/v1/storage/buckets/public/files/65f687c00c4a9eeff4ef/view?project=65f63eb7a14355c1ee4e&mode=admin'}
              alt={client?.servico}
              className="h-12 w-12 flex-none rounded-full bg-white object-cover ring-1 ring-gray-900/10"
            />
            <div className="text-sm font-medium leading-6 text-gray-900">{client?.servico}</div>
            <Menu as="div" className="relative ml-auto">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Open options</span>
                <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        View<span className="sr-only">, {client?.servico}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-50' : '',
                          'block px-3 py-1 text-sm leading-6 text-gray-900'
                        )}
                      >
                        Edit<span className="sr-only">, {client?.createdAt}</span>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Data do pedido</dt>
              <dd className="text-gray-700">
                <time dateTime={moment(client?.createdAt).locale('pt-br').format('lll')}>{moment(client?.createdAt).locale('pt-br').format('ll')}</time>
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">Valor</dt>
              <dd className="flex items-start gap-x-2">
                <div className="font-medium mr-5 text-gray-900">R${client?.valor}</div>
                <div
                  className={classNames(
                    statuses[client?.status],
                    'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                  )}
                >
                  {client?.status}
                </div>
              </dd>
            </div>
          </dl>
        </li>
    ))}
    </ul>
  )
}

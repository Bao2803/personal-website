import { FC, memo, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import GithubIcon from '../Icon/GithubIcon';
import { portfolioItems, SectionId } from '../../data/data';
import Section from '../Layout/Section';
import { PortfolioItem } from '../../data/dataDef';
import Image from 'next/image';
import placeholderLogo from '../../images/project-logo-placeholder.jpg'

const Portfolio: FC = memo(() => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <h2 className="text-center text-xl font-bold text-white mb-8">My Projects</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-lg bg-neutral-700 shadow-lg hover:shadow-xl"
            onClick={() => setSelectedItem(item)}>
            <Image
              src={item.image ? item.image : placeholderLogo}
              alt={item.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-neutral-300">{item.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Transition.Root show={!!selectedItem} as={Fragment}>
          <Dialog as="div" className="relative z-50" onClose={() => setSelectedItem(null)}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95">
                  <Dialog.Panel className="relative w-full max-w-3xl transform overflow-hidden rounded-lg bg-neutral-800 p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title className="flex items-center flex-start gap-2 text-lg font-bold text-white">
                      {selectedItem.title}
                      {selectedItem.url && (
                        <a
                          href={selectedItem.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-natural-500 hover:text-orange-400">
                          <GithubIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                        </a>
                      )}
                    </Dialog.Title>
                    <div className="mt-4">
                      <ul
                        className="text-xs text-white opacity-100 sm:text-sm"
                        style={{ listStyleType: 'disc', marginLeft: '20px' }}
                      >
                        {selectedItem.longDescription.map((bullet, index) => <li key={index} >{bullet}</li>)}
                      </ul>
                      {selectedItem.video && (
                        <div className="mt-4">
                          <iframe
                            src={selectedItem.video}
                            title="Video Demo"
                            className="w-full h-64"
                            allowFullScreen
                          />
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="absolute top-2 right-2 text-white hover:text-orange-500">
                      <span aria-hidden="true" className="text-xl font-bold">×</span>
                    </button>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

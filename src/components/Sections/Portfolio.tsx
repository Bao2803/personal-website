import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { FC, Fragment, memo, useCallback, useState } from 'react';

import { portfolioItems, SectionId } from '../../data/data';
import { PortfolioItem } from '../../data/dataDef';
import placeholderLogo from '../../images/project-logo-placeholder.jpg';
import GithubIcon from '../Icon/GithubIcon';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const handleModalClose = useCallback(() => setSelectedItem(null), []);
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <h2 className="text-center text-xl font-bold text-white mb-8">My Projects</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {portfolioItems.map((item, index) => (
          <div
            className="cursor-pointer overflow-hidden rounded-lg bg-neutral-700 shadow-lg hover:shadow-xl"
            key={index}
            onClick={() => setSelectedItem(item)}>
            <Image
              alt={item.title}
              className="h-48 w-full object-cover"
              src={item.image ? item.image : placeholderLogo}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-neutral-300">{item.shortDescription}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <Transition.Root as={Fragment} show={!!selectedItem}>
          <Dialog as="div" className="relative z-50" onClose={handleModalClose}>
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
                          className="text-natural-500 hover:text-orange-400"
                          href={selectedItem.url}
                          rel="noopener noreferrer"
                          target="_blank">
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
                            allowFullScreen
                            className="w-full h-64"
                            src={selectedItem.video}
                            title="Video Demo"
                          />
                        </div>
                      )}
                    </div>
                    <button
                      className="absolute top-2 right-2 text-white hover:text-orange-500"
                      onClick={() => setSelectedItem(null)}>
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

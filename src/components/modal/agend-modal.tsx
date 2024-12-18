import { t } from "i18next";
import { CalendarDays, X } from "lucide-react";
import { useState } from "react";

export function AgendModal() {

  function disableScroll() {
    document.body.style.overflow = "hidden";
  }
  
  function enableScroll() {
    document.body.style.overflow = "";
  }

  const [isAgendModalOpen, setIsAgendModalOpen] = useState(false);

  function openAgendModal() {
    setIsAgendModalOpen(true);
    disableScroll(); // Bloqueia rolagem ao abrir
  }

  function closeAgendModal() {
    setIsAgendModalOpen(false);
    enableScroll(); // Desbloqueia rolagem ao fechar
  }

  return (
    <>
      <button
        type="button"
        onClick={openAgendModal}
        className="agendButton flex items-center justify-between w-72 hover:bg-slate-500 hover:text-zinc-200 shadow-shape bg- bg-slate-300 transition duration-400 text-slate-950 rounded-2xl px-7 py-3.5"
      >
        <div>{t('homepage.gallery')}</div>
        <div>
          <CalendarDays />
        </div>
      </button>
      <div>
        {isAgendModalOpen && (
          <div  className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="w-full h-full py-5 px-6 bg-colorFundo">
              <div className="flex items-center justify-between text-zinc-200 font-normal text-2xl">
                {t('modal.modalTerms.title')}
                <button type="button">
                  <X onClick={closeAgendModal} className="size-6 cursor-pointer" />
                </button>
              </div>
              <div className="">  
                <p className="text-lg text-zinc-300">
                  {t('blogpage.par1')}
                </p>
                <p className="text-lg text-zinc-300">
                  {t('blogpage.par2')}
                </p>
                <p className="text-lg text-zinc-300">
                  {t('blogpage.par3')}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
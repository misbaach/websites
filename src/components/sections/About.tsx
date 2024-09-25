import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();

    return (
        <>
            <div className='bg-about mt-28 pt-10 pb-10 md:rounded-r-full w-full md:w-2/3'>
                <h1 className='flex text-4xl font-extrabold items-center justify-center'>{t('About Title')} Smi<span className="learn-color">Learn</span>?</h1>
                <br></br>
                <p className='md:pr-20 px-10 text-start text-2xl font-semibold'>Smi<span className="learn-color">Learn</span> {t('About Content 1')}</p>
                <br></br>
                <p className='md:pr-20 px-10 text-start text-2xl font-semibold'>{t('About Content 2')} Smi<span className="learn-color">Learn</span>!</p>

            </div>
        </>
    )
}
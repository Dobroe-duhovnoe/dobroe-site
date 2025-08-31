import BaseBlock from './BaseBlock';

const LegalInfoBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <BaseBlock title={blockNames.LEGAL_INFO} onClose={hideBlockInfo}>
      <div className="flex flex-col items-start justify-start text-left text-base text-[var(--color-primary-dark)]">
        <p>Религиозная группа “Служение ДОБРОЕ ДУХОВНОЕ” зарегистрирована...</p>
      </div>
    </BaseBlock>
  );
};

export default LegalInfoBlock;

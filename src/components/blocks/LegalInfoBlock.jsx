import BaseBlock from './BaseBlock';

const LegalInfoBlock = ({ blockNames, hideBlockInfo }) => {
  return (
    <BaseBlock title={blockNames.LEGAL_INFO} onClose={hideBlockInfo}>
      <div className="flex flex-col items-start justify-start gap-4 text-left text-base text-[#023047]">
        <p>
          Религиозная группа Христиан Веры Евангельской (пятидесятников)
          Служение «Доброе Духовное» г.Ростов-на-Дону
        </p>
        <p>Ведомственный № Религиозной группы 6118010181</p>
      </div>
    </BaseBlock>
  );
};

export default LegalInfoBlock;

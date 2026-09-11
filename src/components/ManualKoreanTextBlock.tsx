type Props = {
  value: string;
  onChange: (value: string) => void;
  onParse: () => void;
  parsing?: boolean;
};

export default function ManualKoreanTextBlock({ value, onChange, onParse, parsing }: Props) {
  return (
    <div className="mb12">
      <label className="form-label">Вставьте корейский текст</label>
      <textarea
        className="textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={'커피 - кофе\n차 - чай'}
      />
      <button
        type="button"
        className="primary-btn mt12"
        onClick={onParse}
        disabled={parsing}
      >
        Распознать
      </button>
    </div>
  );
}

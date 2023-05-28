import React from 'react';

export default function QASection() {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  return (
    <section className="md:mt-[180px my-[120px] md:mb-40">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <h3 className="mb-12 text-heading06 font-bold md:text-heading03">
          常見問題
        </h3>
        <ul className="grid gap-10 md:col-span-2">
          {[
            {
              title: '如何選擇適合的AI模型？',
              description: '常見問題',
            },
            {
              title: '租用模型的費用是如何計算的？',
              description: '請務必保護好自己的帳號和密碼，不得將其透露給他人。',
            },
            {
              title: '如何進行付款？',
              description: '需對使用過程中產生的數據負責，不得擅自泄露數據。。',
            },
            {
              title: '租用模型的期限是多久？',
              description: '需對使用過程中產生的數據負責，不得擅自泄露數據。。',
            },
            {
              title: '如果在使用過程中遇到問題，應該怎麼處理？',
              description: '需對使用過程中產生的數據負責，不得擅自泄露數據。。',
            },
          ].map(({ title, description }, index) => (
            <li key={title} className="rounded-2xl border border-black-80">
              <button
                type="button"
                className="w-full px-10 py-5 text-left"
                onClick={() =>
                  setSelectedIndex(index === selectedIndex ? null : index)
                }
              >
                <p className="flex gap-5">
                  <i className="material-icons text-icon-medium">add</i>
                  <span className="text-heading06 font-bold">{title}</span>
                </p>
                {selectedIndex === index && (
                  <p className="ml-11 mt-3">{description}</p>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

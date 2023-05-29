export default function RuleSection() {
  return (
    <section className="md:mt-[180px mt-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <h3 className="mb-12 text-heading06 font-bold md:text-heading03">
          使用規範
        </h3>
        <ul className="grid gap-10 md:col-span-2">
          {[
            {
              title: '守法',
              description:
                '請遵守相關的法規和政策，不得進行任何違法違規的活動。',
            },
            {
              title: '資訊安全',
              description: '請務必保護好自己的帳號和密碼，不得將其透露給他人。',
            },
            {
              title: '守密',
              description: '需對使用過程中產生的數據負責，不得擅自泄露數據。。',
            },
          ].map(({ title, description }) => (
            <li key={title} className="border-b border-black-80">
              <div className="pb-10">
                <h4 className="mb-3 text-heading03 font-bold md:text-heading01">
                  {title}
                </h4>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

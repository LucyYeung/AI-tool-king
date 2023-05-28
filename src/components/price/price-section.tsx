import { Link } from 'react-router-dom';

export default function PriceSection() {
  return (
    <section className="mt-[120px] md:mt-[238px]">
      <h3 className="mb-6 text-heading03 font-bold md:mb-20">定價</h3>
      <ul className="grid grid-cols-1 flex-wrap gap-3 md:grid-cols-2 md:gap-6">
        {[
          {
            name: '琪琪',
            feature: ['初級', '速度最快'],
            price: 'NT$ 5',
          },
          {
            name: '昊昊',
            feature: ['中級'],
            price: 'NT$ 5',
          },
          {
            name: '卡卡',
            feature: ['高級'],
            price: 'NT$ 5',
          },
          {
            name: '杰杰',
            feature: ['最高級', '資訊最完整'],
            price: 'NT$ 5',
          },
        ].map((item) => (
          <li
            key={item.name}
            className="divide-y divide-black-80 rounded-2xl border border-black-80"
          >
            <div className="h-60 p-5 md:h-[318px] md:px-8">
              <h4 className="mb-3 text-heading03 font-bold">{item.name}</h4>
              <ul className="list-disc">
                {item.feature.map((feature) => (
                  <li key={feature} className="mx-5">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between p-5 md:px-8">
              <p className="text-heading06">
                <span className="font-bold">{item.price}</span>
                <span className="text-black-60">／1k tokens</span>
              </p>
              <Link to="">
                <div className="flex gap-3">
                  <p className="font-bold">開始使用</p>
                  <i className="material-icons">north_east</i>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

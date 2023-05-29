export default function Decos({ style = '' }) {
  return (
    <ul className={`flex w-full md:h-[180px] ${style}`}>
      {Array(3)
        .fill(0)
        .map((_, index) => {
          let animation = '';
          switch (index) {
            case 0:
              animation = 'animate-[grow_5s_ease-in-out_1s_infinite]';
              break;
            case 1:
              animation = 'animate-[grow_5s_ease-in-out_0.5s_infinite]';
              break;
            case 2:
              animation = 'animate-[grow_5s_ease-in-out_0s_infinite]';
              break;
          }

          return (
            <li key={index} className="w-full overflow-hidden md:w-auto">
              <div
                className={`aspect-square h-auto ${animation} bg-deco bg-contain md:w-[180px]`}
              ></div>
            </li>
          );
        })}
    </ul>
  );
}

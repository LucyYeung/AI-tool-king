export const FiveStars= () => {
  return (
    <ul className="mb-5 flex gap-1">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <i key={index} className="material-icons text-icon-small">
            star
          </i>
        ))}
    </ul>
  );
};

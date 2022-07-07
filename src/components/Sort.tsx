import React from "react";
import { useDispatch } from "react-redux";
import { setSortIndex } from "../redux/slices/filter/slice";
import { Sort, SortPropertyEnum } from "../redux/slices/filter/types";

type ListPopupItem = {
  name: string;
  sortProperty: SortPropertyEnum;
}

type SortPopupProps = {
  sortIndex: Sort;
}

export const listPopup: ListPopupItem[] = [
  { name: "популярности + -", sortProperty: SortPropertyEnum.RATING_DESC },
  { name: "популярности - +", sortProperty: SortPropertyEnum.RATING_ASC },
  { name: "цене по убыванию", sortProperty: SortPropertyEnum.PRICE_DESC },
  { name: "цене по возрастанию", sortProperty: SortPropertyEnum.PRICE_ASC },
  { name: "алфавиту А - Я", sortProperty: SortPropertyEnum.TITLE_DESC },
  { name: "алфавиту Я - А", sortProperty: SortPropertyEnum.TITLE_ASC },
];

const SortPopup: React.FC<SortPopupProps> = React.memo(({ sortIndex }) => {
  const dispatch = useDispatch();

  const sortRef = React.useRef<HTMLDivElement>(null);

  const [openPopup, setOpenPopup] = React.useState(false);

  const onClickPopupItem = (obj: ListPopupItem) => {
    dispatch(setSortIndex(obj));
    setOpenPopup(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpenPopup(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpenPopup(!openPopup)}>{sortIndex.name}</span>
      </div>
      {openPopup && (
        <div className="sort__popup">
          <ul>
            {listPopup.map((obj, index) => (
              <li
                key={index}
                onClick={() => onClickPopupItem(obj)}
                className={sortIndex.sortProperty === obj.sortProperty ? "active" : ""}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

export default SortPopup;

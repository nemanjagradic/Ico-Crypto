import classes from "./Pagination.module.scss";
import { Link as ScrollLink } from "react-scroll";

const Pagination = ({ totalCoins, numberPerPage, paginate, active }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCoins / numberPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={classes.pagination}>
      {pageNumbers.map((number) => {
        return (
          <ScrollLink
            key={number}
            to="Market"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
            onClick={paginate.bind(null, number)}
            className={`${classes["pagination__btn"]} ${
              active === number ? classes["pagination__active"] : ""
            }`}
          >
            <span>{number}</span>
          </ScrollLink>
        );
      })}
    </div>
  );
};

export default Pagination;

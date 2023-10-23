import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import classes from "./Faq.module.css";
import { useState } from "react";

const faqArray = [
  {
    title: "What is blockchain technology?",
    description:
      "A blockchain is a decentralized, distributed and public digitalledger that is used to record transactions across many computersso that the record cannot be altered retroactively without thealteration of all subsequent blocks and the consensus of thenetwork.",
  },
  {
    title: "What is bitcoin?",
    description:
      "Bitcoin (BTC) is a cryptocurrency, a virtual currency designedto act as money and a form of payment outside the control of anyone person, group, or entity, thus removing the need for third-party involvement in financial transactions.",
  },
  {
    title: "Who created bitcoin?",
    description:
      "Satoshi Nakamoto is a pseudonym for the person or people whohelped develop the first bitcoin software and introduced the concept of cryptocurrency to the world in a 2008 paper.",
  },
  {
    title: "What is cryptocurrency?",
    description:
      "A cryptocurrency is a digital currency, which is an alternative form of payment created using encryption algorithms.",
  },
  {
    title: "How does cryptocurrency wallet work?",
    description:
      "Crypto wallets hold the user's private key and information, while public keys are located on the blockchain.",
  },
  {
    title: "How to create cryptocurrency wallet?",
    description:
      "Pick a wallet app and download it on a desktop or mobile device; many software wallets have both options.Create an account. ... Write down your recovery or “seed” phrase. ... Add crypto to your wallet.",
  },
];

const Faq = () => {
  const [active, setActive] = useState(null);

  const accorditionHandler = (i) => {
    if (active === i) {
      setActive(null);
    } else {
      setActive(i);
    }
  };
  return (
    <div className={classes.faq} id="FAQ">
      <div className="container">
        <h1>Frequently asked questions</h1>
        <div className={classes["faq-items"]}>
          {faqArray.map((item, i) => {
            return (
              <div
                key={item.title}
                className={classes["faq-item"]}
                onClick={accorditionHandler.bind(null, i)}
              >
                <h4>{item.title}</h4>
                <div className={classes["faq-icon"]}>
                  {active === i ? (
                    <FontAwesomeIcon icon={faChevronUp} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronDown} />
                  )}
                </div>
                <p className={active === i ? classes.active : ""}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;

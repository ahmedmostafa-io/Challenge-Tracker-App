// import { useContext } from "react";

import { useDispatch } from "react-redux";
import {
  deleteChallenge,
  updateChallengeStatus,
} from "../store/challenges-slice";

// import { ChallengesContext } from "../store/challenges-context.jsx";
import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion";

export default function ChallengeItem({
  challenge,
  onViewDetails,
  isExpanded,
}) {
  // const { updateChallengeStatus } = useContext(ChallengesContext);
  const dispatch = useDispatch();
  const formattedDate = new Date(challenge.deadline).toLocaleDateString(
    "en-US",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );

  function handleCancel() {
    dispatch(updateChallengeStatus({ id: challenge.id, status: "failed" }));
  }

  function handleComplete() {
    dispatch(updateChallengeStatus({ id: challenge.id, status: "completed" }));
  }

  function handleRemove() {
    dispatch(deleteChallenge(challenge.id));
  }

  return (
    <motion.li layout exit={{ x: 100, opacity: 0 }}>
      <article className="challenge-item">
        <header>
          <img {...challenge.image} />
          <div className="challenge-item-meta">
            <h2>{challenge.title}</h2>
            <p>Complete until {formattedDate}</p>
            <p className="challenge-item-actions">
              <button onClick={handleCancel} className="btn-negative">
                Mark as failed
              </button>
              <button onClick={handleComplete}>Mark as completed</button>
            </p>
          </div>
          <button className="remove-challenge" onClick={handleRemove}>
            X
          </button>
        </header>
        <div className={`challenge-item-details`}>
          <p>
            <button onClick={onViewDetails}>
              View Details{" "}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                className="challenge-item-details-icon"
              >
                &#9650;
              </motion.span>
            </button>
          </p>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <p className="challenge-item-description">
                  {challenge.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>
    </motion.li>
  );
}

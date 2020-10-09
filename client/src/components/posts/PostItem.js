import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";
import { addLike, removeLike } from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  return (
    <div className="post bg-white my-1 p-1">
      <div>
        <a href="profile.html">
          <img className="round-img" alt="" src={avatar} />
          <h4>{name}</h4>
        </a>
      </div>

      <div>
        <p className="my-1">{text}</p>
        <p className="post-date">
          Posted on <Moment format="MM/DD/YYYY">{moment.utc(date)}</Moment>
        </p>
        <button
          onClick={(e) => addLike(_id)}
          className="btn btn-light"
          type="button"
        >
          <i className="fas fa-thumbs-up">
            {" "}
            <span>
              {likes.length > 0 && (
                <span className="comment-count">{likes.length}</span>
              )}
            </span>
          </i>
        </button>
        <button
          onClick={(e) => removeLike(_id)}
          className="btn btn-light"
          type="button"
        >
          <i className="fas fa-thumbs-down"></i>
        </button>
        <Link to={`/post/${_id}`} className="btn btn-primary">
          Discussion{" "}
          {comments.length > 0 && (
            <span className="comment-count">{comments.length}</span>
          )}
        </Link>
        {!auth.loading && user === auth.user._id && (
          <button type="button" className="btn btn-danger">
            <i className="fas fa-times"></i>
          </button>
        )}
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { addLike, removeLike })(PostItem);
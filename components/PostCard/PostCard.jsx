import React from 'react';
import Link from 'next/link';

import Button from '@components/Common/Button/Button';
import styles from './PostCard.module.css';
import Tag from '@components/Common/Tag/Tag';

const PostCard = ({ post }) => {
  switch (post.frontmatter.tag) {
    case 'knitting':
      return (
        <div className={styles.knitting}>
          <div>
            <div className={styles.cardHeader}>
              <h3 className={styles.title}>{post?.frontmatter?.title}</h3>
              <svg
                style={{ alignSelf: 'center' }}
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M19.7142 22.2857H2.57138C2.09996 22.2857 1.71424 22.6714 1.71424 23.1429V26.5714C1.71424 27.0429 2.09996 27.4286 2.57138 27.4286H19.7142C20.1857 27.4286 20.5714 27.0429 20.5714 26.5714V23.1429C20.5714 22.6714 20.1857 22.2857 19.7142 22.2857ZM22.7678 11.0839C21.3107 9.87322 19.1517 10.0661 17.941 11.5232L16.8214 12.8625L15.2357 5.98393C14.2714 1.83214 10.125 -0.760712 5.97853 0.198217C1.8321 1.15715 -0.760758 5.29822 0.19817 9.45L2.76424 20.5714H19.3178L23.2017 15.9107C24.4178 14.4536 24.2196 12.2946 22.7678 11.0839Z"
                    fill="#6F4B9D"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="24" height="27.4286" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            {`Created: ${post.frontmatter.date}`}
          </div>
          <div className={styles.postBottomContainer}>
            <div className={styles.buttonContainer}>
              <Link href={{ pathname: `/post/${post.slug}` }}>
                <Button label="Read more" />
              </Link>
            </div>
            <Tag tag={post?.frontmatter.tag} tagType={post?.frontmatter.tag} />
          </div>
        </div>
      );
    case 'painting':
      return (
        <div className={styles.painting}>
          <div>
            <div className={styles.cardHeader}>
              <h3 className={styles.title}>{post?.frontmatter?.title}</h3>
              <svg
                style={{ alignSelf: 'center' }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.82904 14.5003C5.94842 14.6213 4.2417 15.3375 3.27326 17.8894C3.16311 18.1805 2.89826 18.3572 2.58936 18.3572C2.06857 18.3572 0.458418 17.0602 -0.000488281 16.747C-1.95313e-05 20.6072 1.77795 24 5.99998 24C9.55592 24 12 21.9483 12 18.3661C12 18.2203 11.9695 18.0811 11.9545 17.9381L7.82904 14.5003ZM21.4636 0C20.753 0 20.0869 0.314531 19.5787 0.771094C9.99701 9.33047 8.99998 9.53156 8.99998 12.0511C8.99998 12.6933 9.15232 13.3055 9.4092 13.8652L12.4008 16.358C12.7387 16.4423 13.087 16.5 13.4503 16.5C16.3617 16.5 18.0492 14.3686 23.3484 4.47844C23.6944 3.80578 24 3.07922 24 2.32266C24 0.9675 22.7812 0 21.4636 0Z"
                  fill="#931111"
                />
              </svg>
            </div>
            {`Created: ${post.frontmatter.date}`}
          </div>
          <div className={styles.postBottomContainer}>
            <div className={styles.buttonContainer}>
              <Link href={{ pathname: `/post/${post.slug}` }}>
                <Button label="Read more" />
              </Link>
            </div>
            <Tag tag={post?.frontmatter.tag} tagType={post?.frontmatter.tag} />
          </div>
        </div>
      );
    case 'blog':
      return (
        <div className={styles.blog}>
          <div>
            <div className={styles.cardHeader}>
              <h3 className={styles.title}>{post?.frontmatter?.title}</h3>
              <svg
                style={{ alignSelf: 'center' }}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.3392 6.66136L21.1782 8.8223C20.9579 9.04261 20.6017 9.04261 20.3814 8.8223L15.1782 3.61917C14.9579 3.39886 14.9579 3.04261 15.1782 2.8223L17.3392 0.661359C18.2157 -0.215204 19.6407 -0.215204 20.522 0.661359L23.3392 3.47855C24.2204 4.35511 24.2204 5.78011 23.3392 6.66136ZM13.322 4.67855L1.01261 16.9879L0.01886 22.6832C-0.117078 23.452 0.553235 24.1176 1.32198 23.9864L7.0173 22.9879L19.3267 10.6785C19.547 10.4582 19.547 10.102 19.3267 9.88167L14.1235 4.67855C13.8985 4.45824 13.5423 4.45824 13.322 4.67855ZM5.8173 15.9332C5.55948 15.6754 5.55948 15.2629 5.8173 15.0051L13.036 7.78636C13.2939 7.52855 13.7064 7.52855 13.9642 7.78636C14.222 8.04417 14.222 8.45667 13.9642 8.71449L6.74542 15.9332C6.48761 16.191 6.07511 16.191 5.8173 15.9332ZM4.12511 19.8754H6.37511V21.577L3.35167 22.1067L1.89386 20.6489L2.42355 17.6254H4.12511V19.8754Z"
                  fill="#699D6F"
                />
              </svg>
            </div>
            {`Created: ${post.frontmatter.date}`}
          </div>
          <div className={styles.postBottomContainer}>
            <div className={styles.buttonContainer}>
              <Link href={{ pathname: `/post/${post.slug}` }}>
                <Button label="Read more" />
              </Link>
            </div>
            <Tag tag={post?.frontmatter.tag} tagType={post?.frontmatter.tag} />
          </div>
        </div>
      );
    default:
      return (
        <div className={styles.post}>
          <div>
            <h3 className={styles.title}>{post?.frontmatter?.title}</h3>
            {`Created: ${post.frontmatter.date}`}
          </div>
          <div className={styles.postBottomContainer}>
            <Link href={{ pathname: `/post/${post.slug}` }}>
              <Button label="Read more" />
            </Link>
            <Tag tag={post?.frontmatter.tag} tagType={post?.frontmatter.tag} />
          </div>
        </div>
      );
  }
};

export default PostCard;
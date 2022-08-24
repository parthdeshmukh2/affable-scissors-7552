import React from "react";
import styles from "../Styles/SingleProduct.module.css";

const SingleProduct = () => {
  return (
    <>
      <div className={styles.category}>
        <div className={styles.catchild}>
          <p>shop</p>
          <p>Daily Cleanse® Clear Skin and Acne Supplement</p>
        </div>
      </div>
      <div className={styles.parent}>
        <div className={styles.child1}>
          <div className={styles.smallimg}>
            <img
              className={styles.img}
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-855514005030-1_75x.jpg?v=1660838903"
              alt=""
            />
            <img
              className={styles.img}
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-855514005030-2_75x.jpg?v=1660838904"
              alt=""
            />
            <img
              className={styles.img}
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-855514005030-3_75x.jpg?v=1660838904"
              alt=""
            />
            <img
              className={styles.img}
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-855514005030-4_75x.jpg?v=1660838905"
              alt=""
            />
            <img
              className={styles.img}
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-855514005030-5_75x.jpg?v=1660838906"
              alt=""
            />
          </div>
          <div className={styles.bigchild}>
            <img
              src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-855514005030-1_825x.jpg?v=1660838903"
              alt=""
            />
          </div>
        </div>
        <div className={styles.child2}>
          <div className={styles.hum}>
            <h3>HUM NUTTRITION</h3>
            <div className={styles.star}>
              <p>*****</p>
              <p>46 reviews</p>
            </div>
          </div>
          <div className={styles.clean}>
            <h3>Daily Cleanse Clear Skin and Acne Supplement</h3>
          </div>
          <div>
            <div className={styles.new}>
              <h3>NEW</h3>
              <h3>BEST SELLER</h3>
              <h3>CONSCIOUS BEAUTY</h3>
            </div>
          </div>
          <div>
            <div className={styles.interest}>
              <h3>$26</h3>
              <p>
                4 interest-free payments of $6.50 with <span>klarna</span> Learn
                more
              </p>
            </div>
          </div>
          <div className={styles.vegan}>
            A powerful vegan and vegetarian formula of organic algae and 14
            detoxifying herbs and minerals to help clear your skin.
          </div>
          <div className={styles.free}>
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-title-defaulttitle-817237011910-1_64x.jpg?v=1659640904"
                alt=""
              />
            </div>
            <div>
              <div>
                <p>Free Gift with purchase</p>
                <h3>PowerGlow@ Peel Packette</h3>
                <p>Free with any purchase</p>
              </div>
            </div>
          </div>
          <div className={styles.count}>Size: 60 count</div>
          <div className={styles.parentcart}>
            <div className={styles.cart}>
              <div className={styles.cart1}>
                <div>carticon</div>
                <div>ADD TO BAG</div>
              </div>
              <div>$26</div>
            </div>
            <div className={styles.counter}>
              <button>-</button>
              <div>1</div>
              <button>+</button>
            </div>
            <div>Heart</div>
          </div>
          <div className={styles.ship}>
            <div>Shipping & Returns</div>
            <div className={styles.ship2}>i</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

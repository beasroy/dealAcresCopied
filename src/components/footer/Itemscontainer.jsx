import Item from "./Item";
import styles from "@/components/footer/footer.module.css";
import { COMPANY, DEALACRES, RESOURCES, EXPLORECITIES } from "./Menu";
const ItemsContainer = () => {
  return (
    <div className={`${styles.itemcont} min-[1024px]:pt-8`}>
      <Item isSocial={true} Links={COMPANY} title="COMPANY" />
      <Item isSocial={true} Links={DEALACRES} title="DEALACRES" />
      <Item isSocial={true} Links={RESOURCES} title="RESOURCES" />
      <Item isSocial={true} Links={EXPLORECITIES} title="EXPLORECITIES" />
    </div>
  );
};

export default ItemsContainer;

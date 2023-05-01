import { List } from 'antd';
import { userLinks, publicLinks } from '../../realEstate/helpers/LinksNavbar';

export const Sidebar = () => (
  <List
    itemLayout="horizontal"
    dataSource={ userLinks }
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={item.icon}
          title={item.label}
        />
      </List.Item>
    )}
  />
);

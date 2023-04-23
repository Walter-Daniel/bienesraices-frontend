import { notification } from 'antd';

export const openNotification = (message, description, type) => {
    notification[type]({
      message: message,
      description: description,
      placement: 'top'
    });
  };

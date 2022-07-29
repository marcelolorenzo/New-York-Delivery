import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {Order} from '../../entities/Order';
import styled from 'styled-components/native';
import {OrderDetails} from '../OrderDetails';
import {OrderModal} from '../OrderModal';

type Props = {
  order: Order;
};

export function OrderCard({order}: Props) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <WrapStyled onPress={() => setVisible(true)}>
        <InfoWrapStyled>
          <OrderDetails order={order} />
        </InfoWrapStyled>
        <FontAwesomeIcon icon={faChevronRight} size={14} />
      </WrapStyled>
      <OrderModal
        order={order}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      />
    </>
  );
}

const WrapStyled = styled.TouchableOpacity`
  border: 1px solid #ced4da;
  border-radius: 6px;
  margin-bottom: 16px;
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

const InfoWrapStyled = styled.View`
  flex: 1;
  padding-right: 20px;
`;
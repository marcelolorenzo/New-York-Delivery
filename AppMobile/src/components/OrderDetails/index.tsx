import React from 'react';
import {Order} from '../../entities/Order';
import {CustomText} from '../CustomText';
import styled from 'styled-components/native';
import {View} from 'react-native';

type Props = {
  order: Order;
  showComments?: boolean;
};

export function OrderDetails({order, showComments = false}: Props) {
  const friendlyId = `${order.friendlyId.substring(
    0,
    4,
  )}-${order.friendlyId.substring(4)}`;
  return (
    <>
      <IdStyled bold>#{friendlyId}</IdStyled>
      <SmallTextStyled>
        <CustomText bold>De:</CustomText> {order.pickupAddress.address}
      </SmallTextStyled>
      <SmallTextStyled>
        <CustomText bold>Para:</CustomText> {order.deliveryAddress.address}
      </SmallTextStyled>
      {showComments && (
        <>
          <SmallTextStyled bold>Observações:</SmallTextStyled>
          <SmallTextStyled>{order.comments}</SmallTextStyled>
        </>
      )}
      <NumbersWrapStyled>
        <View>
          <NumbersTextStyled>Tempo</NumbersTextStyled>
          <NumbersTextStyled bold>{order.minutes} min</NumbersTextStyled>
        </View>
        <View>
          <NumbersTextStyled>Distância</NumbersTextStyled>
          <NumbersTextStyled bold>
            {(order.meters / 1000).toFixed(2).replace('.', ',')}
            km
          </NumbersTextStyled>
        </View>
        <View>
          <NumbersTextStyled>Valor</NumbersTextStyled>
          <NumbersTextStyled bold>
            U$$ {order.partnerValue.toFixed(2).replace('.', ',')}
          </NumbersTextStyled>
        </View>
      </NumbersWrapStyled>
    </>
  );
}

const IdStyled = styled(CustomText)`
  font-size: 16px;
  margin-bottom: 5px;
`;

const SmallTextStyled = styled(CustomText)`
  font-size: 12px;
  margin-bottom: 3px;
`;

const NumbersWrapStyled = styled.View`
  border-top-color: #e1e1e1;
  border-top-width: 1px;
  margin-top: 5px;
  padding-top: 5px;
  flex-direction: row;
  justify-content: space-around;
`;

const NumbersTextStyled = styled(CustomText)`
  font-size: 12px;
  text-align: center;
`;
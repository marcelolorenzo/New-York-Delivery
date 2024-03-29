import React from 'react';
import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import {logoutUser} from '../../services/logoutUser';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons/faRightFromBracket';

export function LogoutButton() {
    const handleLogout = async () => {
        Alert.alert(
            'Tem certeza que deseja sair?',
            'Você precisará informar o e-mail e senha no próximo acesso.',
            [
              {
                text: 'Cancelar',
                style: 'cancel',
              },
              {
                text: 'Ok',
                onPress: async () => {
                  await logoutUser();
                },
              },
            ],
          );
        };
    return (
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
      <FontAwesomeIcon icon={faRightFromBracket} color="#FFF" size={18} />
            </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
    logoutButton: {
      padding: 10,
    },
  });
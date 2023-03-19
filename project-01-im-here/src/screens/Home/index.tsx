import { StatusBar } from "expo-status-bar";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";
import { PARTICIPANTS } from "../../mocks/participants";
import { styles } from "./styles";

const EmptyFlatListText = () => (
  <Text style={styles.listEmptyText}>
    Ninguém chegou no evento ainda? Adicione participantes a sua lista de
    presença.
  </Text>
);

export function Home() {
  const participants = PARTICIPANTS;

  const handleParticipantAdd = () => {
    Alert.alert("Add");
  };

  const handleParticipantRemove = () => {
    Alert.alert("Remove");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Mar, 4 de Novembro</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyFlatListText />}
      />
    </View>
  );
}

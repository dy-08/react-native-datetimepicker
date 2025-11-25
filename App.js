import React, { useState } from 'react';
import { View, Text, Pressable, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    return (
        <View style={styles.container}>
            <Text>날짜 화면</Text>
            <Pressable onPress={() => setShowPicker(true)}>
                <Text>{formatDate(date)}</Text>
            </Pressable>
            {showPicker && (
                <DateTimePicker
                    value={date}
                    mode='date'
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={changeValue}
                />
            )}
        </View>
    );
}
// DateTimePicker가 바뀌는 값(value)을 인자로 반환해줌
const changeValue = (e, value) => {
    console.log(value);

    // 안드로이드는 팝업창으로 픽커가 뜨기때문에 먼저 팝업을 닫아야함
    if (Platform.OS === 'android') {
        setShowPicker(false);
    }
    if (value) {
        setDate(value);
    }
};

const formatDate = (date) => {
    const yy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yy}-${mm}-${dd}`;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

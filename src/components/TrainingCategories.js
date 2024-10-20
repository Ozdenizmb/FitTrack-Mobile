import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TrainingCardFeed from './TrainingCardFeed'
import { getTrainings } from '../api/ApiCalls';
import { useFocusEffect } from '@react-navigation/native';

const TrainingCategories = () => {

    const [data, setData] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            onLoadData();
        }, [])
    );

    const onLoadData = async () => {
        try {
            const response = await getTrainings();
            setData(response.data);
        } catch (error) {

        }
    }

    return (
        <View>
            <TrainingCardFeed category="NUTRITION COURSE" data={data} />
            <TrainingCardFeed category="NO EQUIPMENT" data={data} />
            <TrainingCardFeed category="30 MINUTES OR LESS" data={data} />
            <TrainingCardFeed category="FULL BODY" data={data} />
            <TrainingCardFeed category="YOGA" data={data} />
            <TrainingCardFeed category="BEGINNER FRIENDLY" data={data} />
            <TrainingCardFeed category="STRENGTH TRAINING" data={data} />
            <TrainingCardFeed category="CARDIO" data={data} />
            <TrainingCardFeed category="HIGH INTENSITY INTERVAL TRAINING" data={data} />
            <TrainingCardFeed category="BODYWEIGHT" data={data} />
            <TrainingCardFeed category="PILATES" data={data} />
            <TrainingCardFeed category="MOBILITY" data={data} />
            <TrainingCardFeed category="STRETCHING" data={data} />
            <TrainingCardFeed category="CORE WORKOUT" data={data} />
            <TrainingCardFeed category="BALANCE TRAINING" data={data} />
            <TrainingCardFeed category="ENDURANCE" data={data} />
            <TrainingCardFeed category="LOW IMPACT" data={data} />
            <TrainingCardFeed category="KETTLEBELL WORKOUT" data={data} />
            <TrainingCardFeed category="DUMBBELL WORKOUT" data={data} />
            <TrainingCardFeed category="OUTDOOR WORKOUT" data={data} />
        </View>
    )
}

export default TrainingCategories

const styles = StyleSheet.create({})
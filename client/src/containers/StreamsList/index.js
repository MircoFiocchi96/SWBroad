import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStreams } from './actions';
import ChannelCard from '../../components/Global/Card';
import {
  StreamsList_ListSelector,
  StreamsList_LoadingSelector,
} from './selectors';
import { StreamsFavoriteList_LoadingSelector } from '../NavBar/selectors';
import Loading from '../../components/Global/Loading';

export default function StreamsList() {
  const dispatch = useDispatch();
  const streams = useSelector(StreamsList_ListSelector);
  const isLoading = useSelector(StreamsList_LoadingSelector);
  const isLoadingFavorite = useSelector(StreamsFavoriteList_LoadingSelector);

  useEffect(() => {
    dispatch(fetchStreams({}));
  }, []);

  return (
    <>
      {isLoading || isLoadingFavorite ? (
        <Loading />
      ) : (
        <div>
          {streams &&
            streams.map((e) => (
              <div
                key={e.category}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <h1 style={{ marginLeft: '20px' }}>
                  {e.category?.toUpperCase()}
                </h1>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flex: 3,
                    flexWrap: 'wrap',
                  }}
                >
                  <ChannelCard streams={e.streams}></ChannelCard>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

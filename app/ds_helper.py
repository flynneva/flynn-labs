#!/usr/bin/env python
# -*- coding: utf-8 -*-

from app import env

def store_time(email, dt):
    entity = env.datastore.Entity(key=env.datastore_client.key('User', email, 'visit'))
    entity.update({
        'timestamp': dt
    })

    env.datastore_client.put(entity)


def fetch_times(email, limit):
    ancestor = env.datastore_client.key('User', email)
    query = env.datastore_client.query(kind='visit', ancestor=ancestor)
    query.order = ['-timestamp']

    times = query.fetch(limit=limit)

    return times

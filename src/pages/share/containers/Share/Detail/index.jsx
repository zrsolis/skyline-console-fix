// Copyright 2021 99cloud
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { inject, observer } from 'mobx-react';
import { ShareStore } from 'stores/manila/share';
import Base from 'containers/TabDetail';
import { shareStatus } from 'resources/manila/share';
import BaseDetail from './BaseDetail';
import Metadata from './Metadata';
import AccessRule from './AccessRule';
import actionConfigs from '../actions';

export class Detail extends Base {
  get name() {
    return t('share');
  }

  get policy() {
    return 'share:get';
  }

  get listUrl() {
    return this.getRoutePath('share');
  }

  get actionConfigs() {
    return this.isAdminPage
      ? actionConfigs.actionConfigsAdmin
      : actionConfigs.actionConfigs;
  }

  get detailInfos() {
    return [
      {
        title: t('Name'),
        dataIndex: 'name',
      },
      {
        title: t('Description'),
        dataIndex: 'description',
      },
      {
        title: t('Status'),
        dataIndex: 'status',
        valueMap: shareStatus,
      },
      {
        title: t('Created At'),
        dataIndex: 'created_at',
        valueRender: 'toLocalTime',
      },
    ];
  }

  get tabs() {
    return [
      {
        title: t('Base Info'),
        key: 'baseInfo',
        component: BaseDetail,
      },
      {
        title: t('Metadata'),
        key: 'metadata',
        component: Metadata,
      },
      {
        title: t('Access Rules'),
        key: 'rule',
        component: AccessRule,
      },
    ];
  }

  init() {
    this.store = new ShareStore();
  }
}

export default inject('rootStore')(observer(Detail));

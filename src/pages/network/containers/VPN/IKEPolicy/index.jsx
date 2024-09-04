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

import React from 'react';
import { observer, inject } from 'mobx-react';
import Base from 'containers/List';
import { VpnIKEPolicyStore } from 'stores/neutron/vpn-ike-policy';
import {
  authAlgorithmOptions,
  encryptionAlgorithmOptions,
  ikePolicyIKEVersionOptions,
  pfsOptions,
} from 'resources/neutron/vpn';
import { idNameColumn } from 'utils/table';
import { actionConfigs, adminConfigs } from './actions';

export class IKEPolicy extends Base {
  init() {
    this.store = new VpnIKEPolicyStore();
    this.downloadStore = new VpnIKEPolicyStore();
  }

  get isFilterByBackend() {
    return true;
  }

  get fetchDataByCurrentProject() {
    // add project_id to fetch data;
    return true;
  }

  get policy() {
    return 'get_ikepolicy';
  }

  get name() {
    return t('vpn IKE policy');
  }

  get adminPageHasProjectFilter() {
    return true;
  }

  get hasTab() {
    return true;
  }

  get actionConfigs() {
    if (this.isAdminPage) {
      return adminConfigs;
    }
    return actionConfigs;
  }

  getColumns = () => [
    idNameColumn,
    {
      title: t('Project ID/Name'),
      dataIndex: 'project_name',
      hidden: !this.isAdminPage,
    },
    {
      title: t('Description'),
      dataIndex: 'description',
      render: (value) => value || '-',
      isHideable: true,
    },
    {
      title: t('Auth Algorithm'),
      dataIndex: 'auth_algorithm',
      isHideable: true,
    },
    {
      title: t('Encryption Algorithm'),
      dataIndex: 'encryption_algorithm',
      isHideable: true,
    },
    {
      title: t('IKE Version'),
      dataIndex: 'ike_version',
      isHideable: true,
    },
    {
      title: t('Lifetime'),
      dataIndex: 'lifetime',
      isHideable: true,
      render: (lifeTime) => (
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {Object.keys(lifeTime).map((i, index) => (
            <li
              key={`${index}_${lifeTime[i]}_lifeTime`}
            >{`${i}: ${lifeTime[i]}`}</li>
          ))}
        </ul>
      ),
      stringify: (lifeTime) =>
        Object.keys(lifeTime)
          .map((i) => `${i}: ${lifeTime[i]}`)
          .join(' | '),
    },
    {
      title: t('PFS'),
      dataIndex: 'pfs',
      isHideable: true,
    },
    // {
    //   title: t('Phase1 Negotiation Mode'),
    //   dataIndex: 'phase1_negotiation_mode',
    //   isHideable: true,
    // },
  ];

  get searchFilters() {
    return [
      {
        label: t('Name'),
        name: 'name',
      },
      {
        label: t('Auth Algorithm'),
        name: 'auth_algorithm',
        options: authAlgorithmOptions,
      },
      {
        label: t('Encryption Algorithm'),
        name: 'encryption_algorithm',
        options: encryptionAlgorithmOptions,
      },
      {
        label: t('IKE Version'),
        name: 'ike_version',
        options: ikePolicyIKEVersionOptions,
      },
      {
        label: t('PFS'),
        name: 'pfs',
        options: pfsOptions,
      },
    ];
  }
}

export default inject('rootStore')(observer(IKEPolicy));

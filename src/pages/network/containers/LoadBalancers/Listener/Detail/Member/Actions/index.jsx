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

import DeleteAction from './DeleteMember';
import CreateAction from './CreateMember';
import Edit from './EditMember';

export const actionConfigs = {
  rowActions: {
    firstAction: Edit,
    moreActions: [
      {
        action: DeleteAction,
      },
    ],
  },
  batchActions: [
    // DeleteAction,
  ],
  primaryActions: [CreateAction],
};

export const adminActions = {
  rowActions: {
    moreActions: [
      {
        action: DeleteAction,
      },
    ],
  },
  batchActions: [],
  primaryActions: [],
};

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

import { ConfirmAction } from 'containers/Action';
import globalContainersStore from 'src/stores/zun/containers';
import { checkItemAction } from 'resources/zun/container';

export default class DeleteContainer extends ConfirmAction {
  get id() {
    return 'delete';
  }

  get title() {
    return t('Delete Container');
  }

  get actionName() {
    return t('Delete Container');
  }

  get isDanger() {
    return true;
  }

  get buttonText() {
    return t('Delete');
  }

  policy = 'container:delete';

  aliasPolicy = 'zun:container:delete';

  allowedCheckFunc = (item) => checkItemAction(item, 'delete');

  onSubmit = (data) => globalContainersStore.delete({ id: data.uuid });
}

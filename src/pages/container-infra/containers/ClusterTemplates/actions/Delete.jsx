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
import globalClusterTemplateStore from 'stores/magnum/clusterTemplates';

export default class Delete extends ConfirmAction {
  get id() {
    return 'delete';
  }

  get title() {
    return t('Delete Cluster Template');
  }

  get actionName() {
    return t('Delete Cluster Template');
  }

  get isDanger() {
    return true;
  }

  get buttonText() {
    return t('Delete');
  }

  policy = 'clustertemplate:delete';

  allowedCheckFunc = () => true;

  onSubmit = (data) => globalClusterTemplateStore.delete({ id: data.uuid });
}

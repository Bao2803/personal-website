import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  const skillSeperator = ', ';
  const skillString = useMemo(() => skills.join(skillSeperator), [skills]);
  return (
    <div>
      <span className="text-center text-lg font-bold">{`${name}: `}</span>
      <span className='text-center text-md font-sm'>{skillString}</span>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

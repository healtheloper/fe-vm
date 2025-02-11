import { useContext } from 'react';
import styled from 'styled-components';

import { parseMoneyFormat } from 'common/utils';
import COLORS from 'constants/colors';
import { LogContext } from 'context/LogProvider';

const parseVmLog = ({ type, data }) => {
  switch (type) {
    case 'insert':
      return `${parseMoneyFormat(data)} 이 투입됐음.`;
    case 'select':
      return `${data} 이(가) 선택됨`;
    case 'return':
      return `잔돈 ${parseMoneyFormat(data)} 반환`;
    default:
      return '잘못된 로그';
  }
};

const VMLogs = () => {
  const [logs] = useContext(LogContext);
  return (
    <VMLogsWrapper>
      {logs.map((log) => (
        <VMLog key={log.id}>{parseVmLog(log)}</VMLog>
      ))}
    </VMLogsWrapper>
  );
};

const VMLogsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 3px solid ${COLORS.GREY};
`;

const VMLog = styled.span``;

export default VMLogs;
